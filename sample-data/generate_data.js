let faker = null;

try {
	faker = require('faker');
} catch(e) {
    console.error("faker module required. please run: npm i faker");
    process.exit(e.code);
}

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " <number of reportees>");
    process.exit(-1);
}
 
const numberOfReportees = process.argv[2];

const reportees = [];
let i=0;

while (i < numberOfReportees) {
	i++;
	reportees.push({
		id:  faker.random.uuid(),
	    name: faker.name.findName(),
	    location: {
	    	latitude : faker.address.latitude(),
	    	longitude : faker.address.longitude()
	    },
	    assetAge : faker.random.number({min:0, max:50}),
	    acceptedInspections : faker.random.number({min:0, max:100}),
	    canceledInspections : faker.random.number({min:0, max:100}),
	    averageReplyTime : faker.random.number({min:1, max:3600}),


	});
}
console.log(JSON.stringify(reportees));