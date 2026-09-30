import 'dotenv/config';
import Joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCT_MICROSERVICE_HOST: string;
  PRODUCT_MICROSERVICE_PORT: number;
}

const envsSchema = Joi.object({
  PORT: Joi.number().required(),
  PRODUCT_MICROSERVICE_HOST: Joi.string().required(),
  PRODUCT_MICROSERVICE_PORT: Joi.number().required(),
}).unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  productMicroserviceHost: envVars.PRODUCT_MICROSERVICE_HOST,
  productMicroservicePort: envVars.PRODUCT_MICROSERVICE_PORT,
};
