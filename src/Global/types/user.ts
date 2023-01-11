import { ObjectId } from 'mongodb';
import { Gender } from './../../utils/Gender';
export interface users {
    _id: ObjectId
    name: string,
    password: string,
    role: 'student' | 'teacher',
    email: string,
    school: string,
    number: string,
    gender: number,
    portrait: string

}