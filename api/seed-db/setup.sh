#!/bin/bash

set -e

mongoimport -d forum -c posts --file posts.json --jsonArray