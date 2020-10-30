import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createRecipe1603569848326 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'recipe',
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
                    name: 'description',
                    type: 'text'
                },
                {
                    name: 'patient_id',
                    type: 'integer'
                },
                {
                    name: 'medicine_id',
                    type: 'integer'
                }

            ],
            foreignKeys: [
                {
                    name: 'RecipePatient',
                    columnNames: ['patient_id'],
                    referencedTableName: 'patient',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
                {
                    name: 'RecipeMedicine',
                    columnNames: ['medicine_id'],
                    referencedTableName: 'medicine',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('recipe')
    }

}
