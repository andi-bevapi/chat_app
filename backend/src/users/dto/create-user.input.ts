import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword, IsString, } from "class-validator";

@InputType()
export class CreateUserInput {
	@Field()
	@IsString()
	name: string;

	@Field()
	@IsString()
	lastname: string;

	@Field()
	@IsEmail()
	email: string;

	@Field()
	@IsStrongPassword()
	password: string;

}
