import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  //   OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { Role } from './role.entity'; // Assuming you'll have a Role entity

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  //   @OneToMany(() => Role, (role) => role.user)
  //   roles: Role[];
}
