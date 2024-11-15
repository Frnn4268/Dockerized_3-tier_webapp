.PHONY: build
build:
	docker build --tag api-data-processing-node .

# Have to authenticate to dockerhub and create repo first:
# https://docs.docker.com/engine/reference/commandline/login/
.PHONY: push-node-api-dockerhub
push-dockerhub:
	docker tag api-data-processing-node frnn4268/api-data-processing-node # defaults to latest
	docker push frnn4268/api-data-processing-node

# Have to authenticate to ghcr.io first
# https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry
.PHONY: push-github-packages
push-github-packages:
	docker tag api-data-processing-node ghcr.io/frnn4268/api-data-processing-node # defaults to latest
	docker push ghcr.io/frnn4268/api-data-processing-node
