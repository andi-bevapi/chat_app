import * as bcrypt from 'bcrypt';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "../users/entities/user.entity";

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private readonly usersRepository: Repository<User>) {
	}

	public async create(createUserInput: CreateUserInput): Promise<User> {

		try {
			const hashedPassword = await bcrypt.hash(createUserInput.password, 10);
			const result = await this.usersRepository.save(
				{
					...createUserInput,
					password: hashedPassword
				}
			)
			return result;
		} catch (error) {
			throw new HttpException("We dont have any result to show", HttpStatus.NOT_FOUND)
		}
	}

	public async findAll(): Promise<User[]> {
		try {
			const result = await this.usersRepository.find();
			return result;
		} catch (error) {
			throw new HttpException("We dont have any result to show", HttpStatus.NOT_FOUND)
		}
	}

	public async findOne(id: number): Promise<User> {
		try {
			const result = await this.usersRepository.findOne({ where: { id } })
			return result;
		} catch (error) {
			throw new HttpException("Use with this id was not found", HttpStatus.NOT_FOUND);
		}
	}

	public async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
		try {
			await this.usersRepository.update(id, updateUserInput);
			const result = this.usersRepository.findOne({ where: { id } })
			return result;
		} catch (error) {
			throw new HttpException("Use with this id was not found", HttpStatus.NOT_FOUND);
		}
	}

	public async remove(id: number): Promise<{ id: number; success: boolean; message?: string }> {
		try {
			const user = await this.usersRepository.findOne({ where: { id } });
			if (!user) {
				throw new HttpException("User with this id was not found", HttpStatus.NOT_FOUND)
			}
			await this.usersRepository.delete(id);
			return { id: id, success: true, message: "User has been successfully deleted" };
		} catch (error) {
			throw new HttpException("User with this id was not found", HttpStatus.NOT_FOUND)
		}
	}
}
