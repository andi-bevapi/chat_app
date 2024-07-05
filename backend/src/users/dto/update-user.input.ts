import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';


//validimet qe kemi bere ne create.dto i trashegon dhe update dhe kete aftesi ja jep extend PartialType(CreateUserInput)
@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
	@Field(() => Int)
	id: number;

	@Field({ nullable: true })
	name?: string;

	@Field({ nullable: true })
	lastname?: string;

	@Field({ nullable: true })
	email?: string;

	@Field({ nullable: true })
	password?: string;

}
