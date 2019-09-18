var KeyboardInput = {
  // Changing the direciton to the corresponding key.
  CheckDirection: function() {
    if (cursors.right.isDown && Snake.direction != Direction.left)
      Snake.direction = Direction.right
    else if (cursors.left.isDown && Snake.direction != Direction.right)
      Snake.direction = Direction.left
    else if (cursors.up.isDown && Snake.direction != Direction.down)
      Snake.direction = Direction.up
    else if (cursors.down.isDown && Snake.direction != Direction.up)
      Snake.direction = Direction.down
  }
}
