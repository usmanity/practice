
/* Write your function here. Useful type checking functions: 
 *
 * typeof(obj) === "string"
 * typeof(obj) === "number"
 * Array.isArray(obj) === true
 * typeof(obj) === "object" [and !isArray]
 */

var my_json_encode = function(obj) {
    var output_obj;
    switch (typeof(obj)) {
        case "string":
            output_obj = '"' + obj + '"';
            break;
        case "number":
            output_obj = obj + '';
            break;
        case "object":
            // in: {"a": 123, "b": 355, "c": [1,2,3]} => {"a":123, "b":355, "c": [1,2,3]}
            output_obj = "{"; 
            for (key in obj) {
                output_obj += "" + key + ":" +  my_json_encode(obj[key]);
            }
            output_obj += "}";
            break;
    }
    return output_obj + "";
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var parsed_input;

process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
    parsed_input = JSON.parse(input); 
    output = my_json_encode(parsed_input);
  
    process.stdout.write(output);
});
