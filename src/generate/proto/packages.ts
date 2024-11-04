/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.2
 * source: proto/packages.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export enum PackageType {
    firstPing = 0
}
export class Package extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        type?: PackageType;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("type" in data && data.type != undefined) {
                this.type = data.type;
            }
        }
    }
    get type() {
        return pb_1.Message.getFieldWithDefault(this, 1, PackageType.firstPing) as PackageType;
    }
    set type(value: PackageType) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        type?: PackageType;
    }): Package {
        const message = new Package({});
        if (data.type != null) {
            message.type = data.type;
        }
        return message;
    }
    toObject() {
        const data: {
            type?: PackageType;
        } = {};
        if (this.type != null) {
            data.type = this.type;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.type != PackageType.firstPing)
            writer.writeEnum(1, this.type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Package {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Package();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.type = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Package {
        return Package.deserialize(bytes);
    }
}
