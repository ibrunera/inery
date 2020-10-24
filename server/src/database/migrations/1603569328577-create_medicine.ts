import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMedicine1603569328577 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'medicine',
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
            name: 'manufacturer',
            type: 'varchar'
          },
          {
            name: 'compund',
            type: 'text'
          },
          {
            name: 'description',
            type: 'text'
          },
          {
            name: 'photo',
            type: 'varchar'
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('medicine')
    }

}
