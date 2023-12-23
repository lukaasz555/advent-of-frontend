export type JsonSchema = {
	type: string;
	properties?: Record<string, JsonSchema>;
	required?: string[];
	items?: JsonSchema;
	nullable?: boolean;
};

export const generateSchema = (schemaDefinition: JsonSchema): JsonSchema => {
	const res: JsonSchema = {
		type: schemaDefinition.type,
	};

	if (schemaDefinition.properties) {
		Object.assign(res, { properties: schemaDefinition.properties });
	}
	if (schemaDefinition.required) {
		Object.assign(res, { required: schemaDefinition.required });
	}
	if (schemaDefinition.items) {
		Object.assign(res, { items: schemaDefinition.items });
	}
	if (schemaDefinition.nullable) {
		Object.assign(res, { nullable: schemaDefinition.nullable });
	}

	return res;
};

export const validate = (schema: JsonSchema, jsonObject: any): boolean => {
	if (schema.properties) {
		const schemaKeys = Object.keys(schema.properties);
		const objKeys = Object.keys(jsonObject);

		if (schemaKeys.length > objKeys.length) return false;

		function isKeyInSchema(key: string) {
			return schemaKeys.includes(key);
		}

		if (objKeys.every((k) => isKeyInSchema(k))) return true;
		return false;
	} else return false;
};
