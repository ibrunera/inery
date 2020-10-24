import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPacient1603568638021 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: 'pacient',
          columns : [
            {                                                                                                                          
              name: 'id',
              type: 'integer',
              unsigned: true,
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
            },
            { 
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'password',
              type: 'varchar'
            },
            {
              name: 'cpf',
              type: 'varchar',
            },
            {
              name: 'photo',
              type: 'varchar'
            }
          ]
        }))
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('pacient')
    }

}
