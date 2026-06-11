FROM node:23-alpine AS builder
WORKDIR /app

ARG ALPINE_MIRROR=https://mirrors.aliyun.com/alpine
ARG NPM_REGISTRY=https://registry.npmmirror.com
ENV COREPACK_NPM_REGISTRY=${NPM_REGISTRY}

RUN sed -i "s|https://dl-cdn.alpinelinux.org/alpine|${ALPINE_MIRROR}|g" /etc/apk/repositories \
    && npm config set registry "${NPM_REGISTRY}"

COPY package.json pnpm-lock.yaml* ./
RUN corepack enable \
    && corepack install \
    && pnpm config set registry "${NPM_REGISTRY}"
RUN pnpm install --frozen-lockfile
COPY . .
COPY .env .
RUN pnpm run build

FROM python:3.11-slim
WORKDIR /app

ARG DEBIAN_MIRROR=https://mirrors.aliyun.com/debian
ARG DEBIAN_SECURITY_MIRROR=https://mirrors.aliyun.com/debian-security
ARG PYPI_MIRROR=https://pypi.tuna.tsinghua.edu.cn/simple
ENV PIP_INDEX_URL=${PYPI_MIRROR} \
    UV_INDEX_URL=${PYPI_MIRROR}

RUN set -eux; \
    for file in /etc/apt/sources.list /etc/apt/sources.list.d/debian.sources; do \
      if [ -f "$file" ]; then \
        sed -i \
          -e "s|http://deb.debian.org/debian|${DEBIAN_MIRROR}|g" \
          -e "s|https://deb.debian.org/debian|${DEBIAN_MIRROR}|g" \
          -e "s|http://deb.debian.org/debian-security|${DEBIAN_SECURITY_MIRROR}|g" \
          -e "s|https://deb.debian.org/debian-security|${DEBIAN_SECURITY_MIRROR}|g" \
          -e "s|http://security.debian.org/debian-security|${DEBIAN_SECURITY_MIRROR}|g" \
          -e "s|https://security.debian.org/debian-security|${DEBIAN_SECURITY_MIRROR}|g" \
          "$file"; \
      fi; \
    done; \
    python -m pip config set global.index-url "${PYPI_MIRROR}"

COPY .env .
COPY requirements.txt .
RUN python -m pip install --no-cache-dir uv
RUN uv pip install --no-cache-dir --index-url "${PYPI_MIRROR}" -r requirements.txt --system

COPY src/server/ ./src/server/
COPY --from=builder /app/dist ./dist
COPY run.py .
COPY alembic.ini ./alembic.ini
COPY alembic ./alembic
COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 8000
CMD ["/app/entrypoint.sh"]
