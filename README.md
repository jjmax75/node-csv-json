# node-csv-json
Convert a CSV file to JSON

## Usage
`node app.js <inputfile> <delimiter> <outputfilename>`

will output to `output` folder and append extension `.json`


### Example

`node app.js myCSV.csv $'\t' data`

where
 - inputfile is in same dir and is called myCSV.csv
 - the file is tab delimited
 - the required output name is data (file will be output to './output/data.json')