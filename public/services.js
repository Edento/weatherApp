// SERVICES
weatherApp.service('cityService', function () {

    this.city = "Tel Aviv, Israel";
});

weatherApp.service('weatherService', ['$resource', function ($resource) {

// we have to put it in a method in order to call it
    this.getWeather = function (city, days) {
        var weatherAPI =
            $resource("http://api.openweathermap.org/data/2.5/forecast", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });
        // ?q=London,uk&cnt=2&appid=9c4bc811354e0cfe4a211100fbcd6ecf");

        return weatherAPI.get({ q: city, cnt: days, appid: "9c4bc811354e0cfe4a211100fbcd6ecf" });

    };
}]);