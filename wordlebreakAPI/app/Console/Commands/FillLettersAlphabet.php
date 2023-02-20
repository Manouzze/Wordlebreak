<?php

namespace App\Console\Commands;

use App\Models\Letter;
use Illuminate\Console\Command;

class FillLettersAlphabet extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'letters:alphabet';

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


          $alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for($i=0; strlen($alphabet); $i++){
            $letter = new Letter;
            $letter->letter = $alphabet[$i];
            $letter->occurence = 0.07096591712629;
            $letter->save();
        };

        return Command::SUCCESS;
    }
}
