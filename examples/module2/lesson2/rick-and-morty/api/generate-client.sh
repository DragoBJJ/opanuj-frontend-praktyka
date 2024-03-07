#!/bin/bash
API="https://gist.githubusercontent.com/przeprogramowani/6e35bd3a347f4a58de6ec16514739f23/raw/506b7ff69b9bd8b32bc52bac318f6cd3fb468833/rickandmorty.json"

openapi-generator generate -i $API -g typescript-fetch -o ./api-client



