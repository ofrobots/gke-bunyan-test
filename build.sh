#!/bin/bash

PROJECT=ofrobots-test-19
CLUSTER=bunyan-test

APP=${CLUSTER}-app

set -ex
docker build -t gcr.io/${PROJECT}/${APP}:latest .

# This assumes that you have used `gcloud auth configure-docker`
# to configure docker to use the gcloud as a credential helper.
docker push gcr.io/${PROJECT}/${APP}

# When setting up for the first time:
# gcloud container clusters create ${CLUSTER}
# gcloud container clusters get-credentials ${CLUSTER}
# kubectl run bunyan-test --image gcr.io/${PROJECT}/${APP}:latest --port 8080
# kubectl expose deployment bunyan-test --type "LoadBalancer"

