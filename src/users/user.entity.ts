import {
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  AfterInsert,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @AfterInsert()
  logInser() {
    console.log('inserted', this.id);
  }
  @AfterUpdate()
  LogUpdate() {
    console.log('update the user', this.id);
  }

  @AfterRemove()
  LogRemove() {
    console.log('removing', this.id);
  }
}
