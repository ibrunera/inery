import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAlarm1603570317642 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'alarm',
        columns: [
            {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'hour',
                type: 'integer'
            },
            {
                name: 'recipe_id',
                type: 'integer'
            },
            
        ],
        foreignKeys: [
            {
                name: 'AlarmRecipe',
                columnNames: ['recipe_id'],
                referencedTableName: 'recipe',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        ]
    }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('alarm')
    }

}
