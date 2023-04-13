import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';

interface ChangedPostsAttributes {
  id: number;
  userid: number;
  title: string;
  body: string;
  ischanged: boolean;
  contentlength: number;
  createdAt?: Date;
  updatedAt?: Date;
}

class ChangedPost
  extends Model<ChangedPostsAttributes>
  implements ChangedPostsAttributes
{
  public id!: number;
  public userid!: number;
  public title!: string;
  public body!: string;
  public ischanged!: boolean;
  public contentlength: number;
  public createdAt?: Date;
  public updatedAt?: Date;
}

ChangedPost.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ischanged: {
      type: DataTypes.BOOLEAN(),
      allowNull: false,
    },
    contentlength: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    tableName: 'changedposts',
    sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
  },
);

export { ChangedPost };
