# これなに？
playwrightで外部リンクを踏んで外部サイトに飛んだことを検証できるかを検証したかった

# なんで？
cypressだと外部サイトは ```origin()``` 関数みたいなやつで囲まないといけなくて冗長だった  
vitestのブラウザーモードだとyoutubeは埋め込めなかった。iframe周りのなんかのセキュリティ設定だと思うんだけど、面倒なので深追いせずこっちを検証してみた  

# 結論
playwrightで外部リンクを踏んで外部サイトに飛んだことを検証できた

```
Running 3 tests using 3 workers
  Slow test file: [webkit] › example.spec.ts (23.5s) 
  Slow test file: [firefox] › example.spec.ts (22.4s)
  Consider splitting slow test files to speed up parallel execution
  3 passed (27.3s)

To open last HTML report run:

  pnpm exec playwright show-report
```