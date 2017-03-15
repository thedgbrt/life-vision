var server = require("./app");
var request = require("supertest");

afterAll(server.close());

it('Runs', function () {
  return request(server)
    .get('/')
    .then(function(res) {
      expect(res.status).toBe(200);
    });
});

it('Prints Hello world', function () {
  return request(server)
    .get('/')
    .then(function(res) {
      expect(res.text).toBe("Hello, world!");
    });
});
