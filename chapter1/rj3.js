var rj3 = {};
rj3.svg = {};

rj3.svg.line = function() {
    var getX = function(point) {
        return point[0];
    }, getY = function(point) {
        return point[1];
    }, interpolate = function(points) {
        console.log(points);
        return points.join("L");
    };

    function line(data) {
        var segments = [], points = [], i=-1, n=data.length, d;

        function segment() {
            segments.push("M", interpolate(points));
        }

        while(++i < n) {
            d = data[i];
            points.push([+getX.call(this, d, i), +getY.call(this, d, i)]);
        }

        if (points.length) {
            segment();
        }

        return segments.length ? segments.join("") : null;
    }

    line.x = function(funcToGetX) {
        if (!arguments.length) return getX;
        getX = funcToGetX;
        return line;
    }

    line.y = function(funcToGetY) {
        if (!arguments.length) return getY;
        getY = funcToGetY;
        return line;
    }

    return line;
}

var arrayData = [
    [10,130],
    [100,60],
    [190,160],
    [200,10]
], lineGenerator = rj3.svg.line(), test = lineGenerator(arrayData);

console.log(test);

var testData2 = [
    {x:10, y:130},
    {x:100, y:60},
    {x:190, y:160}
], lineGenerator2 = rj3.svg.line().x(function(d) {return d.x;}).y(function(d) {return d.y})
, test2 = lineGenerator2(testData2);

console.log(test2);

