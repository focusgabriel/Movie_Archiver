import mongoose from "mongoose";
type MovieSchema = {
    searchTerm: string;
    count: number;
    poster_url: string;
};
type MovieList = {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
    original_language: string;
    release_date: string;
};
export declare const newMovie: mongoose.Model<MovieSchema, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, MovieSchema, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<MovieSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<MovieSchema, mongoose.Model<MovieSchema, any, any, any, any, any, MovieSchema>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, MovieSchema, mongoose.Document<unknown, {}, MovieSchema, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<MovieSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    searchTerm?: mongoose.SchemaDefinitionProperty<string, MovieSchema, mongoose.Document<unknown, {}, MovieSchema, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<MovieSchema & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    count?: mongoose.SchemaDefinitionProperty<number, MovieSchema, mongoose.Document<unknown, {}, MovieSchema, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<MovieSchema & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    poster_url?: mongoose.SchemaDefinitionProperty<string, MovieSchema, mongoose.Document<unknown, {}, MovieSchema, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<MovieSchema & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, MovieSchema>, MovieSchema>;
export declare function PopulateDatabase(searchTerm: string, movie: MovieList[]): Promise<string | null | undefined>;
export {};
//# sourceMappingURL=index.d.ts.map