import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { DeleteUserEntity } from './entities/userDeleteEntity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { DeleteUserInput } from './dto/delete-user.input';


@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) { }

	@Mutation(() => User)
	createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
		return this.usersService.create(createUserInput);
	}

	@Query(() => [User], { name: 'findAll' })
	findAll() {
		return this.usersService.findAll();
	}

	@Query(() => User, { name: 'getById' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.usersService.findOne(id);
	}

	@Mutation(() => User)
	updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
		return this.usersService.update(updateUserInput.id, updateUserInput);
	}

	@Mutation(() => DeleteUserEntity)
	async removeUser(@Args('id', { type: () => Int }) id: number): Promise<DeleteUserInput> {
		return await this.usersService.remove(id);
	}
}
