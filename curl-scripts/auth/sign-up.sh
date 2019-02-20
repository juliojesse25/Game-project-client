curl --include "https://wdi-library-api.herokuapp.com/sign-up" \
--request POST\
--header "Content-Type: application/json" \
--data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

  echo
