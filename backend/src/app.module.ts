import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'Andi1990+',
			database: 'chat_app',
			entities: [User],
			synchronize: true,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: "src/schema.gql",
		}),
		UsersModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
