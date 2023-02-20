<?php

namespace App\Console\Commands;

use App\Models\Word;
use Illuminate\Console\Command;

class ImportWordsJson extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'words:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import words from json file';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Importing words from json file...');
        $json = file_get_contents('storage/app/words.json');

        $datas = json_decode($json);

        $bar = $this->output->createProgressBar(count($datas));
        foreach($datas as $data){
            $word = new Word();
            $word->word = $data;
            $word->save();

            $this->info('Word added: '.$data);
            $bar->advance();
        }
        $bar->finish();

        $this->info('Words imported!');

        return Command::SUCCESS;
    }
}
