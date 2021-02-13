pm.test("Verify key as_token in response", function(){
    pm.response.to.have.jsonBody("as_token");
    pm.environment.unset("url_bearer_token");
    var json = JSON.parse(responseBody);
    postman.setEnvironmentVariable("url_bearer_token", `Bearer ${json.as_token}`);
})