import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteUserEntity {
	@Field()
	id: number;

	@Field()
	success: boolean;

	@Field()
	message?: string;
}