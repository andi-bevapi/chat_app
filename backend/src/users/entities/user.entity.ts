import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
@ObjectType()
export class User {
	@PrimaryGeneratedColumn()
	@Field()
	id: number;

	@Column()
	@Field()
	name: string;

	@Column()
	@Field()
	lastname: string

	@Column()
	@Field()
	email: string

	@Column()
	@Field()
	password: string
}