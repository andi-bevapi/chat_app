import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "../users/entities/user.entity";
import { AbstractServices } from 'src/helpers/absctract.services';

@Injectable()
export class UsersService extends AbstractServices {
	constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {
		super(usersRepository)
	}

	// create(createUserInput: CreateUserInput) {
	// 	return 'This action adds a new user';
	// }

	// public async findAll() {
	// 	const result = await this.usersRepository.find();
	// 	console.log("result----", result);
	// 	return result;
	// }

	// findOne(id: number) {
	// 	return `This action returns a #${id} user`;
	// }

	// update(id: number, updateUserInput: UpdateUserInput) {
	// 	return `This action updates a #${id} user`;
	// }

	// remove(id: number) {
	// 	return `This action removes a #${id} user`;
	// }
}
