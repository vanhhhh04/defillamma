# Coins server

For usage: https://defillama.com/docs/api
For contributions: https://docs.llama.fi/coin-prices-api

run dyamodb: 
dynamodb_local_latest % java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

run redis:
redis-server

run elastics:
docker run -p 9200:9200 -e "discovery.type=single-node" elasticsearch:8.13.4

run fafka: 
kafka-server-start /opt/homebrew/etc/kafka/server.properties


list all coins with their symbols
aws dynamodb scan \
  --table-name prod-coins-table \
  --endpoint-url http://localhost:8000 \
  --region us-east-1 \
  | jq -r '.Items[] | [.PK.S, .symbol.S] | @tsv'

list all recods for bsc chain:
