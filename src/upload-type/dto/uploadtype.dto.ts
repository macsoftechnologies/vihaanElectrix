import { ApiProperty } from "@nestjs/swagger";

export class uploadTypeDto{
    @ApiProperty()
    userId: string
    @ApiProperty()
    documents: [];
}
 