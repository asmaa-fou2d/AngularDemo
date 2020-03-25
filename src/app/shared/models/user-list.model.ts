import { User } from './user.model';

export interface UserListModel {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: User[],
    ad: AdditionalData
}

export interface AdditionalData {
    company: string,
    url: string,
    text: string
}