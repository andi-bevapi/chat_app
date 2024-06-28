import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export abstract class AbstractServices {
	protected constructor(protected readonly repository: Repository<any>) { }

	public async getAll(): Promise<any[]> {
		const result = await this.repository.find({});
		return result;
	}

	create(createInput: any) {
		return 'This action adds a new user';
	}

	public async findAll(): Promise<any> {
		const result = await this.repository.find({});
		return result;
	}

	public async findOne(id: number) {
		return `This action returns a #${id} user`;
	}

	public async update(id: number, updateInput) {
		return `This action updates a #${id} user`;
	}

	public async remove(id: number) {
		return `This action removes a #${id} user`;
	}
}