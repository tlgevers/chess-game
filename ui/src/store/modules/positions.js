var startingPositions = {
  A1: { piece: 'playerRook', icon: 'fas fa-chess-rook fa-2x' },
  A2: { piece: 'playerKnight', icon: 'fas fa-chess-knight fa-2x' },
  A3: { piece: 'playerBishop', icon: 'fas fa-chess-bishop fa-2x' },
  A4: { piece: 'playerQueen', icon: 'fas fa-chess-queen fa-2x' },
  A5: { piece: 'playerKing', icon: 'fas fa-chess-king fa-2x' },
  A6: { piece: 'playerBishop2', icon: 'fas fa-chess-bishop fa-2x' },
  A7: { piece: 'playerKnight2', icon: 'fas fa-chess-knight fa-2x' },
  A8: { piece: 'playerRook2', icon: 'fas fa-chess-rook fa-2x' },
  B1: { piece: 'playerPawn1', icon: 'fas fa-chess-pawn fa-2x' },
  B2: { piece: 'playerPawn2', icon: 'fas fa-chess-pawn fa-2x' },
  B3: { piece: 'playerPawn3', icon: 'fas fa-chess-pawn fa-2x' },
  B4: { piece: 'playerPawn4', icon: 'fas fa-chess-pawn fa-2x' },
  B5: { piece: 'playerPawn5', icon: 'fas fa-chess-pawn fa-2x' },
  B6: { piece: 'playerPawn6', icon: 'fas fa-chess-pawn fa-2x' },
  B7: { piece: 'playerPawn7', icon: 'fas fa-chess-pawn fa-2x' },
  B8: { piece: 'playerPawn8', icon: 'fas fa-chess-pawn fa-2x' }
}

const state = {
  positions: []
}

const mutations = {
  setPositions (state, positions) {
    state.positions = positions
  },
  updatePostion (state, position) {
    console.log('state.positions', state.positions)
    state.positions = state.positions.map(p => {
      if (p === position) {
        return position
      } else {
        return p
      }
    })
  }
}

const getters = {
  allPositions: state => state.positions
}

const actions = {
  getPositions (context) {
    context.commit('setPositions', startingPositions)
  },
  updateUser (context, position) {
    context.commit('updatePostion', position)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
