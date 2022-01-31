// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . 2 2 2 . . . . . . . 
. . . . 2 2 . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . 2 . . . . . . 
. . 2 . . . . . . . 2 2 . . . . 
. . 2 . . . . . . . . 2 2 . . . 
. . 2 2 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000001010101000000000000000000010101010101010000000000000001010101010001010000000000000001010100010101010000000000010101010000000101000000000000010101010000010100000000000000000001010101010000000000000000000101000101000000000000000000000101030303000000000202000000000001000000000000000000000000000000000303000303000002020000000000000003030000000303020002020200000000000303030000000000020002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles15,sprites.swamp.swampTile13,myTiles.tile1], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100002030303030303030303030303030305090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a06090a0a0a0a0a0a0a0a0a0a0a0a0a0a060901010a0a0a0a0a0a0a0a0a0a0a0a060901010a0a0a0a0a0a0a0a0a0a0a0a0608040404040404040404040404040407`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,tiles.util.arrow4,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
