curl --include "https://wdi-library-api.herokuapp.com/sign-in" \
--request POST\
--header "Content-Type: application/json" \
--data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

  echo
