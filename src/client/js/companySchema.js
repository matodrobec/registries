{
	"$schema": "http://json-schema.org/schema#",
	"id": "uri://registries/company",
	"table": "company",
	"listFields": [
		{"field":"id", "title": "ID"},
		{"field":"baseData.name", "title":"Meno"},
		{"field":"baseData.surName", "title":"Priezvisko"},
		{"field":"baseData.birthDate", "title":"Dátum narodenia"},
		{"field":"contactInfo.city", "title":"Mesto"}
	],
	"properties": {
		
		"baseData": {
			"title": "Základné údaje",
			"type": "object",
			"properties": {
				"id": {
					"title": "Identifikátor",
					"type": "string",
					"required": true
				},
				"name": {
					"title": "Názov spoločnosti",
					"type": "string",
					"required": true
				}
				
				
				
			}
		}
	}
}
