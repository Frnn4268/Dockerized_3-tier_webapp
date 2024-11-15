.PHONY: build
build:
	docker build --tag api-golang .

# Have to authenticate to dockerhub and create repo first:
# https://docs.docker.com/engine/reference/commandline/login/
.PHONY: push-node-api-dockerhub
push-dockerhub:
	docker tag api-golang frnn4268/api-golang # defaults to latest
	docker push frnn4268/api-golang

# Have to authenticate to ghcr.io first
# https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry
.PHONY: push-github-packages
push-github-packages:
	docker tag api-golang ghcr.io/frnn4268/api-golang # defaults to latest
	docker push ghcr.io/frnn4268/api-golang
