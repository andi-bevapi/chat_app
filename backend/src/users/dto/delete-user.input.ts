import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class DeleteUserInput {
	@Field()
	id: number;

	@Field()
	success: boolean;

	@Field()
	message?: string;
}