export type User = {
    _id: string;
    email: string;
    password: string;
}

export type NoteType = {
    _id: string;
    _user_id: string | null;
    title: string;
    created_at: string;
}