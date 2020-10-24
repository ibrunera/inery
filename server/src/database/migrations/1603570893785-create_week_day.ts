import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createWeekDay1603570893785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'week_day',
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
                name: 'week_day',
                type: 'integer'
            },
            {
                name: 'alarm_id',
                type: 'integer'
            },
            
        ],
        foreignKeys: [
            {
                name: 'WeekDayAlarm',
                columnNames: ['alarm_id'],
                referencedTableName: 'alarm',
                referencedColumnNames: ['id'],
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        ]
    }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('week_day')
    }

}
