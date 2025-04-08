// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`20001000090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090909090d0d0d0d0d0d09090909090909090909090909090909090909020909090909090d0d0d0d0d0d09090909090909090909090909090904010909090909090c09090d0d0d0d0d0d0909090909090909090909090909090b0a0909090909090909090d0d0d0d0d0d090e090909090909090909090909090b0a0909090909090909090d0d0d0d0d0d0904050501080808090908080808080b0a0909090909090909090d0d0d0d0d0d0903060607090909090909090909090b0a0909090909090909090d0d0d0d0d0d0909090909090909090909090909090b0a0909090909090909090d0d0d0d0d0d0909090909090909090909090909090b0a0909090909090909090d0d0d0d0d0d0909090909090909090909090909090b0a0909090909090909090d0d0d0d0d0d0909090909090909090909090909090b0a0909090909090909090d0d0d0d0d0d0909090909090909090909090909090b0a0909090909090909090d0d0d0d0d0d`, img`
...................2..........2.
...................22.........2.
.......................2......2.
.................2............2.
.................2........2...22
.............2...2.2......2...22
.................2.....2..2...22
...............2.2........2...22
...............2.2........2...22
.2..22....22..22.2........2...22
.2..2..........2.2........2...22
.2..2..........2.2........2...22
.2..2..........2.2........2...22
.2..2..........2.2........2...22
.2..2..........2.2........2...22
.2..2..........2.2........2...22
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.floorDark1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.stairWest,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorth0,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
