<?php

namespace App\Console\Commands;

use App\Http\Controllers\WordsController;
use App\Models\Word;
use Illuminate\Console\Command;

class CleanWords extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'words:clean';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Cleaning words...');

        $words = Word::all();

        $bar = $this->output->createProgressBar($words->count());

        foreach ($words as $word) {
            $word->word_clean = WordsController::remove_accents(strtolower($word->word));
            $word->save();

            $bar->advance();
        }

        $bar->finish();

        $this->info('Words cleaned!');

        return Command::SUCCESS;
    }
}
