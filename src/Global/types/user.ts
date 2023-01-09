import { Gender } from './../../utils/Gender';
export interface users{
    name:string,
    password:string,
    role: 'student' | 'teacher',
    email:string,
    school:string,
    number:string,
    gender: Gender
    
}