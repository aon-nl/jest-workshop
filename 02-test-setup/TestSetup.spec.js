// Fix these tests by adding code to the existing before/after functions

describe('TestSetup', () => {
  const entries = []
  beforeAll(() => {

  })

  it('should contain chocolate', () => {
    expect(entries).toContain('chocolate')
    expect(entries.length).toBe(1)
  })

  describe('this bit needs wine', () => {
    beforeEach(() => {
      const chocoIndex = entries.indexOf('chocolate')
      if (chocoIndex > -1) {
        entries.splice(chocoIndex, 1)
      }
    })

    afterAll(() => {

    })

    it('should contain wine', () => {
      expect(entries).not.toContain('chocolate')
      expect(entries).toContain('wine')
      expect(entries.length).toBe(2)
    })
  })

  it('should not contain wine', () => {
    expect(entries).not.toContain('wine')
    expect(entries).toContain('chocolate')
    expect(entries.length).toBe(1)
  })
})
